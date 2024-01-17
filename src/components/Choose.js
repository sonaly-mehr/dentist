"use client"
import React from "react"

import image1 from "../assets/images/choose1.png"
import image2 from "../assets/images/choose2.png"
import image3 from "../assets/images/choose3.png"
import image4 from "../assets/images/choose4.png"
import Image from "next/image"

const Choose = () =>{
    const chooseInfo = [
        {
            image : image1,
            title : "Team with recognized awards"
        },
        {
            image : image2,
            title : "State of art Infrastructure"
        },
        {
            image : image3,
            title : "New Technology"
        },
        {
            image : image4,
            title : "Best doctors from India"
        }
    ]

    return(
        <section className="choose__section">
            <div className="container">
                <div className="choose__inner">
                    <h2>Why Alshifa Healthcare Services is a good option for Bone Marrow Treatment?</h2>

                    <div className="row choose__box justify-content-center">
                    {chooseInfo.map((item, index)=>
                        <div className="col-sm-6 col-md-4" key={index}>
                            <div className="box mb-5" >
                                <div className="image"><Image src={item.image}alt="" /></div>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choose;