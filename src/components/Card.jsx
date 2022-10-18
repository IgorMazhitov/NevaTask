import React from "react";
import card from "../img/card.jpeg"

    const Card = (props) => {

        const cardImg = require("../img/card.jpeg")

        return (

            <div class=" min-w-80 mx-5 my-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                <div class="md:shrink-0">
                    <img class="h-48 w-full object-cover md:h-full md:w-48" src={cardImg} alt="Modern building architecture"></img>
                </div>
                <div class="p-8 h-auto">
                    <div class="tracking-wide text-xs text-slate-400 font-semibold">2 часа</div>
                    <a href="#" class="block mt-1 text-sm leading-tight font-medium text-black hover:underline">АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019</a>
                    <div class=" text-sm ">

                        <ul class="box-border">
                            <li class="flex flex-row items-center my-2 text-center"> <svg class="w-1/6 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> <p class="w-5/6">Неограниченное число катаний</p> </li>
                            <li class="flex flex-row items-center my-2 text-center"> <svg class="w-1/6 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> <p class="w-5/6">Билет на целый день </p></li>
                            <li class="flex flex-row items-center my-2 text-center"> <svg class="w-1/6 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> <p class="w-5/6">6 остановок около главных достопримечательностей</p> </li>
                            <li class="flex flex-row items-center my-2 text-center"> <svg class="w-1/6 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> <p class="w-5/6">Ближайший рейс сегодня</p> </li>
                        </ul>

                    </div>

                    <div class="text-sm w-full">

                        <ul class="box-border flex flex-row">
                            <li class="w-1/4 flex justify-center items-center rounded-xl bg-blue-200 mx-1 text-xs h-6">12:00</li>
                            <li class="w-1/4 flex justify-center items-center rounded-xl bg-blue-200 mx-1 text-xs h-6">12:00</li>
                            <li class="w-1/4 flex justify-center items-center rounded-xl bg-blue-200 mx-1 text-xs h-6">12:00</li>
                            <li class="w-1/4 flex justify-center items-center rounded-xl bg-blue-200 mx-1 text-xs h-6">12:00</li>

                        </ul>

                    </div>

                    <div class=" h-12 my-2 w-full flex flex-row justify-start items-center">

                        <div class="w-1/4 flex flex-col justify-start items-center">
                            <div class="text-sm"> 1000 P </div>
                            <div class="text-xs"> 500 р на причале </div>
                        </div>

                        <div class="w-3/4 flex justify-center items-center"> <div class=" bg-yellow-400 rounded-xl text-sm h-11 w-48 flex justify-center items-center"> Подробнее </div> </div>

                    </div>
                </div>
                </div>
            </div>

        )

    }

export default Card