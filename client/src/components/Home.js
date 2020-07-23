import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import { ButtonContainer } from "./Layout/Button";
import store from "./../img/hum.jpg";
import quizz from "./../img/quizes.png";
import productivity from "./../img/productivity.png";
import moreUnderstanding from "./../img/more-understanding.png";
import interactiveLessons from "./../img/interactive-lessons.png";
import helping from "./../img/helping.png";
import moreTime from "./../img/more-time.png";
export default class Home extends Component {
  render() {
    return (
      <div className="">
        <header className="header">
          <p className="mr-5 float-right">
            {" "}
            <h1 className="site-title animate__animated animate__pulse animate__delay-1s animate__faster animate__repeat-2">
              نعمل سويا لكي تصل إلى <br />
              مرادك وتحقق أهدافك
            </h1>
          </p>
        </header>
        <section className="section1">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12 mt-5 mb-3">
                <h2 className="animate__animated animate__heartBeat animate__delay-3s animate__repeat-2 ">
                  ما هو ارتقِ؟
                </h2>
              </div>
              <div className="col-md-12 ">
                <p>
                  ارتقِ هو موقع اكتروني يمكنك من اجراء اختبارات للمواد اللمية
                  المختلفة بطريقة سهلة ومبسطة عن طريق اجراء عدة اختبارات
                  <br />
                  التي تريدها يتضمن جميع المواد العلمية والأدبية المخلفة
                </p>
              </div>

              <div className="col-md-12 mt-5 irtsec">
                <div className="container text-center">
                  <h1 className="mb-5">لماذا تستخدم ارتقِ؟</h1>

                  <div className="container mt-4">
                    <div className="row">
                      <div className="col-md-4">
                        <div class="">
                          <img
                            className="card-img-top"
                            src={moreTime}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="card-body">
                          <h3 className="card-text">وقت اضافي</h3>
                          <p className="card-text">
                            وفر الوقت الضائع في الدروس الخصوصية
                            <br />
                            لتستغله بامر اخر
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div class="">
                          <img
                            className="card-img-bottom"
                            src={moreUnderstanding}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="card-body">
                          <h3 className="card-text">فهم اعمق</h3>
                          <p className="card-text">
                            مع النطام الجديد للدروس و طرق الاختبار سنضمن لك
                            الفهم الكامل للمنهاج
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="">
                          <img
                            className="card-img-bottom"
                            src={productivity}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="card-body">
                          <h3 className="card-text">انتاجية اكير</h3>
                          <p className="card-text">
                            لقد حضرنا المناهج كاملة و هي بانتظارك لتدرسها
                            <br /> باي وقت{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section4 ">
          <div className="row">
            <div className="col-md-6 col-sm-3 "></div>
            <div className="col-md-6 col-sm-3 text-right"> </div>
          </div>
        </section>
        <section className="section2 mb-5 ">
          <div className="row">
            <div className="col-md-6 col-sm-3 "></div>
            <div className="col-md-6 col-sm-3 text-right">
              {" "}
              <h1 className=" pr-5 mt-3">سجل معنا كطالب</h1>
              <p className="mt-3 pr-5">
                يقدم لك ارتقِ شرح مبسط لجميع المواد العلمية باستخدام الصور
                <br /> وبطريقة حديثة وسلسة تمكنك من فهم المادة واجراء اخبار
                بعدوالفيديوهات كل فقرة بحيث تتاكد أنك فهمت موادك بشكل كامل
              </p>
              <ButtonContainer className="m-5">
                <span className="mr-2 ">سجل الآن</span>
              </ButtonContainer>
            </div>
          </div>
        </section>
        <section className="section3 mt-5 mb-5 text-center">
          <h1 className="mt-2">ماذا سنقدم لك ؟</h1>

          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-3 pt-1">
                <div class="">
                  <img
                    className="card-img-top"
                    src={interactiveLessons}
                    alt="Card image cap"
                  />

                  <div className="card-body">
                    <h3 className="card-text">دروس تفاعلية</h3>
                    <p className="card-text">
                      التعلم بالتطبيق هو المبدأ المتبع في ارتقي <br />
                      فمن خلال المنهج الجديد للدروس ستتعلم و تطبق فورا وهذه من
                      انجح الطرق التعليمية
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-3">
                <div class="">
                  <img
                    className="card-img-top"
                    src={helping}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h3 className="card-text">(24 / 7) موجودون لمساعدتك</h3>
                    <p className="card-text">
                      فريق مختص من الاساتذة سيجيبون على اي سؤال يخطر لك <br />
                      لنضمن لك الفهم الكامل للمادة
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-3">
                <div class="">
                  <img
                    className="card-img-top"
                    src={quizz}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h3 className="card-text">اختبارات لجميع المستويات</h3>
                    <p className="card-text">
                      نحرص في ارتقي ان تنال الدرجة الكاملة <br />
                      ولهذا اختباراتنا المكثفة ستضمن لك التفوق{" "}
                    </p>
                  </div>
                </div>
                <ButtonContainer className="m-auto mt-2" id="mobileButton">
                  <span className="mr-2">ابدأ التعلم</span>
                </ButtonContainer>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
