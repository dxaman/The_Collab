import React from "react";


class Workshop extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      para: "A two day workshop to understand one of the fundamental institutions in our democracy: the Parliament. The first session provided with an overview of who's who in the Parliament and the functions of the legislature. While the 2nd session focussed on how policymakers and citizens can follow the work of Parliament and engage with legislators for a healthy democracy.",
      Head1: "Introduction to Parliament",
      Head2: "Resource person: Ms. Mridula Raghvan, Program Officer, PRS Legislative Research",
      img: 'https://static.dw.com/image/17886435_303.jpg'
    };
  }
  changeFirst = () => {
    this.setState({Head1: "Introduction to Parliament",Head2: "Resource person: Ms. Mridula Raghvan, Program Officer, PRS Legislative Research",para: "A two day workshop to understand one of the fundamental institutions in our democracy: the Parliament. The first session provided with an overview of who's who in the Parliament and the functions of the legislature. While the 2nd session focussed on how policymakers and citizens can follow the work of Parliament and engage with legislators for a healthy democracy.", img: 'https://media-exp1.licdn.com/dms/image/C5603AQHX78sPVnysog/profile-displayphoto-shrink_800_800/0/1621841064521?e=1639008000&v=beta&t=CvrKEAS5rZr21peqT4QM0-AlshgGz1OIubsNWa36ICA'});
  }
  changeTwo = () => {
    this.setState({Head1: "Decoding China: China’s Foreign Policy",Head2: "Resource person: Mr. Tanveer Jai Kishen",para:'The workshop highlighted the role of China’s foreign policy in dominating over global economy and trade from a historical perspective. A rigorous discussion on Border Road Initiative and China’s Debt Trap Policy took place along with its impact on India.',img:'https://redkangaroohealth.com/wp-content/uploads/2017/04/TANVIR-PHOTO.jpg' });
  }
  changeThird = () => {
    this.setState({Head1: "Decoding China: Defence and Security (Understanding PRC and PLA)",Head2: "Resource person: Col. Hariharan",para:'The workshop was an attempt to study China’s defence capabilities and its evolution over the years specially at times when we had an active standoff with PLA in Galwan Valley, Ladakh. A qualitative discussion on the implications of these developments over India even took place.',img:'https://www.c3sindia.org/wp-content/uploads/2014/10/114-207x495.jpg'});
  }

  render(){ 
  return (
    <>
     <h1>Workshop </h1>
     
     <div class="main_box shadow-lg p-3 mb-5 bg-body rounded">

        <div class="row" style={{backgroundColor: "white"}}>
            <div class="col-md-7 col-sm-12">

                <div class="scroll">
                    <table class="table">
                        <tr>
                            <td class="td_left">
                                <h5>Introduction to Parliament</h5>
                                <p class="author_name" id="auth_name_1">Resource person: Ms. Mridula Raghvan, Program Officer, PRS Legislative Research</p>
                                <p class="table_text "  id="auth_work_1"> A two day workshop to understand one of the fundamental institutions in our democracy: the Parliament. The first session provided with an overview of who's who in the Parliament and the functions of the legislature. While the 2nd session focussed on how policymakers and citizens can follow the work of Parliament and engage with legislators for a healthy democracy. </p>
                            </td>
                            <td class="td_right">
                            <p class="table_link"onClick={this.changeFirst} >Learn More</p>
                            </td>
                        </tr>
                    </table>
                    <table class="table">
                        <tr>
                            <td class="td_left">
                                <h5>Decoding China: China’s Foreign Policy</h5>
                                <p class="author_name"  id="auth_name_2">Resource person: Mr. Tanveer Jai Kishen</p>
                                <p class="table_text" id="auth_work_2"> The workshop highlighted the role of China’s foreign policy in dominating over global economy and trade from a historical perspective. A rigorous discussion on Border Road Initiative and China’s Debt Trap Policy took place along with its impact on India.  </p>
                            </td>
                            <td class="td_right">
                                
                                    <p class="table_link" onClick={this.changeTwo}>Learn More</p>
                                
                            </td>
                        </tr>
                    </table>
                    <table class="table">
                        <tr>
                            <td class="td_left">
                                <h5>Decoding China: Defence and Security (Understanding PRC and PLA)</h5>
                                <p class="author_name" id="auth_name_3">Resource person: Col. Hariharan</p>
                                <p class="table_text"  id="auth_work_3">The workshop was an attempt to study China’s defence capabilities and its evolution over the years specially at times when we had an active standoff with PLA in Galwan Valley, Ladakh. A qualitative discussion on the implications of these developments over India even took place. </p>
                            </td>
                            <td class="td_right">
                               
                                    <p class="table_link" onClick={this.changeThird}>Learn More</p>
                               
                            </td>
                        </tr>
                    </table>
                   


                </div>

            </div>
              

            <div class="col-md-5 col-sm-12">
                <div class="right">

                    <img src={this.state.img} alt="img2" class="img-fluid" srcset="" id="author_img"
                      style={{width:'100%',height:'300px',marginBottom:'20px',margin:"auto"}}
                    />
                    <h3>{this.state.Head1}</h3>
                    <p class="author_name"  id="auth_rightSide_name">{this.state.Head2}</p>
                    <p id="author_rightSide_work">{this.state.para}</p>
                    
                    
                </div>
            </div>
        </div>

    </div>
    </>
  );
}
}

export default Workshop;
