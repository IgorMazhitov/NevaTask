import React from "react";
import card from "../img/card.jpeg"

    const Card = (props) => {

        const opt = props.opt
        const price = props.price

        const cardImg = require("../img/card.jpeg")

        return (

            <div class=" min-w-80 mx-5 my-10 bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                <div class="md:shrink-0 relative">
                    {opt && <div class="absolute top-12 left-0 w-32 h-10 flex justify-center items-center bg-yellow-300 rounded-r-lg test-lg"> {opt} </div>}
                    <img class="h-48 w-full object-cover md:h-full md:w-48" src={cardImg} alt="Modern building architecture"></img>
                </div>
                <div class="p-8 h-auto">
                    <div class="tracking-wide text-xs text-slate-400 font-semibold flex flex-row"> 
                        <svg class="svg-icon w-4 h-4 mr-2" viewBox="0 0 20 20">
							<path d="M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412"></path>
						</svg> 
                        2 часа
                        </div>
                    <a href="#" class="block mt-1 text-sm leading-tight font-medium text-black hover:underline">АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019</a>
                    <div class=" text-sm ">

                        <ul class="box-border">
                            <li class="flex flex-row items-center my-2 text-center"> <svg class="w-1/6 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> <p class="w-5/6 text-left">Неограниченное число катаний</p> </li>
                            <li class="flex flex-row items-center my-2 text-center"> <svg class="w-1/6 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> <p class="w-5/6 text-left">Билет на целый день </p></li>
                            <li class="flex flex-row items-center my-2 text-center"> <svg class="w-1/6 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> <p class="w-5/6 text-left">6 остановок около главных достопримечательностей</p> </li>
                            <li class="flex flex-row items-center my-2 text-center"> <svg class="w-1/6 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> <p class="w-5/6 text-left">Ближайший рейс сегодня</p> </li>
                        </ul>

                    </div>

                    <div class="text-sm w-full">

                        <ul class="box-border flex flex-row">
                            <li class="w-1/4 flex justify-center items-center rounded-xl bg-blue-200 mx-1 text-xs h-6 cursor-pointer">12:00</li>
                            <li class="w-1/4 flex justify-center items-center rounded-xl bg-blue-200 mx-1 text-xs h-6 cursor-pointer">12:00</li>
                            <li class="w-1/4 flex justify-center items-center rounded-xl bg-blue-200 mx-1 text-xs h-6 cursor-pointer">12:00</li>
                            <li class="w-1/4 flex justify-center items-center rounded-xl bg-blue-200 mx-1 text-xs h-6 cursor-pointer">12:00</li>

                        </ul>

                    </div>

                    <div class=" h-12 my-2 w-full flex flex-row justify-start items-center">

                        <div class="w-1/4 flex flex-col justify-center items-center">
                            <div class="text-sm w-full text-center"> 1000 P </div>
                            {price && <div class="text-xs w-full text-center"> 500 р на причале </div>}
                        </div>

                        <div class="w-3/4 flex justify-center items-center"> <div class=" bg-yellow-400 rounded-xl text-sm h-11 w-48 flex justify-center items-center cursor-pointer"> Подробнее </div> </div>

                    </div>
                </div>
                </div>
            </div>

        )

    }

export default Card