import React, {useState} from 'react'
import {
    EndingContainer,
    EndingWrapper,
    EndH1
} from './EndingElements'
import './style.css'



const Ending = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <EndingContainer>
                <EndH1>Past Partners</EndH1>
                <EndingWrapper>
                        <div className="parterns_div">
                            <hr/>
                                <table cellSpacing="20px">
                                    <tr>
                                        <td><img src="https://i.ibb.co/W2J7S6y/C3S.png" alt="Parterns_img"
                                                 className="sponcer_bigimg1"/></td>
                                        <td><img src="https://i.ibb.co/gtwSgFC/prs.png" alt="Parterns_img"/></td>
                                        <td><img src="https://i.ibb.co/R7H0cJd/CSTEP-Logo-Color.png" alt="Parterns_img"/>
                                        </td>
                                        <td><img src="https://i.ibb.co/QMbrXjh/School-Of-Politics.png"
                                                 alt="Parterns_img"/>
                                        </td>
                                        <td><img src="https://i.ibb.co/k1CNFr6/Bala-Janagraha.png" alt="Parterns_img"/>
                                        </td>
                                        <td><img src="https://i.ibb.co/sgh2fFc/class-sathi.png" alt="Parterns_img"/></td>
                                        <td><img src="https://i.ibb.co/bJfJHKr/d2clogo-2.png" alt="Parterns_img"/></td>
                                    </tr>

                                </table>
                                <table cellSpacing="10px">
                                    <tr>
                                        <td><img src="https://i.ibb.co/0KFrjXs/forumias.png" alt="Parterns_img"/></td>
                                        <td><img src="https://i.ibb.co/vhgbx4t/Taghive.png" alt="Parterns_img"/></td>
                                        <td><img src="https://i.ibb.co/F75RcvW/Jarvis-Logo-2-X2-ft.png"
                                                 alt="Parterns_img"/></td>
                                        <td><img src="https://i.ibb.co/FBRyDsG/moolya.png" alt="Parterns_img"/></td>
                                        <td><img src="https://i.ibb.co/2n1XRSf/summachar.png" alt="Parterns_img"
                                                 className="sponcer_bigimg2"/></td>
                                        <td><img src="https://i.ibb.co/sCGbp0F/vif.png" alt="Parterns_img"
                                                 className="sponcer_bigimg3"/></td>
                                    </tr>
                                </table>
                            <hr/>
                        </div>
                </EndingWrapper>
            </EndingContainer>
        </>
    )
}

export default Ending
