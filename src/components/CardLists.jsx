import React from "react";
import Card from "./Card";

    const CardList = (list) => {

        const Clist = list.list

        console.log(list)

        return (

            Clist.map(el => <Card key={el.id} />)

        )

    }

export default CardList