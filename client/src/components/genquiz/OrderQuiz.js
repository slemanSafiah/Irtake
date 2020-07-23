import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
class OrderQuiz extends Component {
  state = {
    shuffled: [
      {
        id: 1,
        text: this.props.quiz.ans1,
      },
      {
        id: 2,
        text: this.props.quiz.ans2,
      },
      {
        id: 3,
        text: this.props.quiz.ans3,
      },
      {
        id: 4,
        text: this.props.quiz.ans4,
      },
    ],
    users: [],
    success: 0,
  };
  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  componentDidMount() {
    this.setState({
      users: this.shuffleArray(this.state.shuffled),
    });
  }
  onDragEnd = (result) => {
    const { destination, source, reason } = result;
    if (!destination || reason === "CANCEL") {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const users = Object.assign([], this.state.users);
    const droppedUser = this.state.users[source.index];

    users.splice(source.index, 1);
    users.splice(destination.index, 0, droppedUser);
    this.setState({
      users,
    });
  };

  renderUsers = (item, index) => {
    return (
      <Draggable key={index} draggableId={index + " "} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="item rounded shadow-sm">
              <span className="text-right">{item.text}</span>{" "}
              <span className=" text-right">-{index + 1}</span>
            </div>
          </div>
        )}
      </Draggable>
    );
  };
  onsend = (e) => {
    e.preventDefault();
    let ans = "";
    this.state.users.map((ele) => {
      ans = ans.concat(ele.id);
    });
    if (ans === "1234") {
      this.setState({
        success: 1,
      });
      this.props.increment();
    } else {
      this.setState({
        success: 2,
      });
    }
    const sort = this.props.quiz.sort;
    this.props.setLast(sort + 1);

    console.log("DSvd", this.props.last);

    console.log(ans);
  };
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="mt-3 mb-3">
          <h3 className="text-right">
            {ReactHtmlParser(this.props.quiz.question)} :السؤال
          </h3>

          <Droppable droppableId="dp1">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {this.state.users.map(this.renderUsers)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div>
            {this.state.success == 2 && this.props.fin ? (
              <>
                <h6 className="text-right"> :الجواب الصحيح </h6>
                <h6 className="text-right"> {this.props.quiz.ans1} -1 </h6>
                <h6 className="text-right">{this.props.quiz.ans2} -2</h6>
                <h6 className="text-right">{this.props.quiz.ans3} -3</h6>
                <h6 className="text-right">{this.props.quiz.ans4} -4</h6>
              </>
            ) : (
              ""
            )}
          </div>
          <input
            type="submit"
            className={
              this.state.success == 1 && this.props.fin
                ? "btn btn-success"
                : this.state.success == 2 && this.props.fin
                ? "btn btn-danger"
                : "btn"
            }
            onClick={this.onsend}
            value="تأكد"
            disabled={this.props.last < this.props.quiz.sort}
          />
        </div>
      </DragDropContext>
    );
  }
}
export default OrderQuiz;
