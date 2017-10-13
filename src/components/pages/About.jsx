import React, {Component} from 'react';
import {Page, Accordion, AccordionContent, AccordionItem, AccordionToggle, Tabs, Tab,
    Card, CardContent, CardFooter, CardHeader, Swiper, SwiperSlide} from 'framework7-react';
import axios from 'axios';
import Parser from 'html-react-parser';
import { render } from 'react-dom';

export class About extends Component {
    constructor(props,context) {
        super(props,context);

        this.state = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        }
    }

    componentDidMount() {
        axios.get(`https://cpsrk.foi.hr/jsonapi/node/program?_format=json_api&sort=field_time&filter[field_event_day][value]=1`)
        .then(function (response) {
            this.setState({1: response.data.data})
        }.bind(this))
        axios.get(`https://cpsrk.foi.hr/jsonapi/node/program?_format=json_api&sort=field_time&filter[field_event_day][value]=2`)
        .then(function (response) {
            this.setState({2: response.data.data})
        }.bind(this))
        axios.get(`https://cpsrk.foi.hr/jsonapi/node/program?_format=json_api&sort=field_time&filter[field_event_day][value]=3`)
        .then(function (response) {
            this.setState({3: response.data.data})
        }.bind(this))
        axios.get(`https://cpsrk.foi.hr/jsonapi/node/program?_format=json_api&sort=field_time&filter[field_event_day][value]=4`)
        .then(function (response) {
            this.setState({4: response.data.data})
        }.bind(this))
        axios.get(`https://cpsrk.foi.hr/jsonapi/node/program?_format=json_api&sort=field_time&filter[field_event_day][value]=5`)
        .then(function (response) {
            this.setState({5: response.data.data})
        }.bind(this))
    }

    render() {
        return (
            <Page>
                <Swiper>
                    <SwiperSlide>
                        <p id="swiperTitle">Ponedjeljak</p>
                        {this.state[1].map(function(object, i){
                            object = object.attributes;


                            var type = "event";
                            if(object.field_event_type === "1") {
                                type = "lecture";
                            }
                            else if(object.field_event_type === "2") {
                                type = "workshop";
                            }
                            return <Card id={type} key={i}>
                                <AccordionItem>
                                    <AccordionToggle>
                                        <CardHeader>{object.title}</CardHeader>
                                        <CardFooter>
                                            <p>{object.field_room}</p>
                                            <p>{object.field_time} - {object.field_time_end}</p>
                                        </CardFooter>
                                    </AccordionToggle>
                                    <AccordionContent id="eventContent">
                                        {Parser(object.body === null ? "" : object.body.value)}
                                    </AccordionContent>
                                </AccordionItem>
                            </Card>;
                        })}
                    </SwiperSlide>

                    <SwiperSlide>
                        <p id="swiperTitle">Utorak</p>
                        {this.state[2].map(function(object, i){
                            object = object.attributes;


                            var type = "event";
                            if(object.field_event_type === "1") {
                                type = "lecture";
                            }
                            else if(object.field_event_type === "2") {
                                type = "workshop";
                            }
                            return <Card id={type} key={i}>
                                <AccordionItem>
                                    <AccordionToggle>
                                        <CardHeader>{object.title}</CardHeader>
                                        <CardFooter>
                                            <p>{object.field_room}</p>
                                            <p>{object.field_time} - {object.field_time_end}</p>
                                        </CardFooter>
                                    </AccordionToggle>
                                    <AccordionContent id="eventContent">
                                        {Parser(object.body === null ? "" : object.body.value)}
                                    </AccordionContent>
                                </AccordionItem>
                            </Card>;
                        })}
                    </SwiperSlide>

                    <SwiperSlide>
                        <p id="swiperTitle">Srijeda</p>
                        {this.state[3].map(function(object, i){
                            object = object.attributes;


                            var type = "event";
                            if(object.field_event_type === "1") {
                                type = "lecture";
                            }
                            else if(object.field_event_type === "2") {
                                type = "workshop";
                            }
                            return <Card id={type} key={i}>
                                <AccordionItem>
                                    <AccordionToggle>
                                        <CardHeader>{object.title}</CardHeader>
                                        <CardFooter>
                                            <p>{object.field_room}</p>
                                            <p>{object.field_time} - {object.field_time_end}</p>
                                        </CardFooter>
                                    </AccordionToggle>
                                    <AccordionContent id="eventContent">
                                        {Parser(object.body === null ? "" : object.body.value)}
                                    </AccordionContent>
                                </AccordionItem>
                            </Card>;
                        })}
                    </SwiperSlide>

                    <SwiperSlide>
                        <p id="swiperTitle">Četvrtak</p>
                        {this.state[4].map(function(object, i){
                            object = object.attributes;


                            var type = "event";
                            if(object.field_event_type === "1") {
                                type = "lecture";
                            }
                            else if(object.field_event_type === "2") {
                                type = "workshop";
                            }
                            return <Card id={type} key={i}>
                                <AccordionItem>
                                    <AccordionToggle>
                                        <CardHeader>{object.title}</CardHeader>
                                        <CardFooter>
                                            <p>{object.field_room}</p>
                                            <p>{object.field_time} - {object.field_time_end}</p>
                                        </CardFooter>
                                    </AccordionToggle>
                                    <AccordionContent id="eventContent">
                                        {Parser(object.body === null ? "" : object.body.value)}
                                    </AccordionContent>
                                </AccordionItem>
                            </Card>;
                        })}
                    </SwiperSlide>

                    <SwiperSlide>
                        <p id="swiperTitle">Petak</p>
                        {this.state[5].map(function(object, i){
                            object = object.attributes;


                            var type = "event";
                            if(object.field_event_type === "1") {
                                type = "lecture";
                            }
                            else if(object.field_event_type === "2") {
                                type = "workshop";
                            }
                            return <Card id={type} key={i}>
                                <AccordionItem>
                                    <AccordionToggle>
                                        <CardHeader>{object.title}</CardHeader>
                                        <CardFooter>
                                            <p>{object.field_room}</p>
                                            <p>{object.field_time} - {object.field_time_end}</p>
                                        </CardFooter>
                                    </AccordionToggle>
                                    <AccordionContent id="eventContent">
                                        {Parser(object.body === null ? "" : object.body.value)}
                                    </AccordionContent>
                                </AccordionItem>
                            </Card>;
                        })}
                    </SwiperSlide>

                </Swiper>
            </Page>
        );
    }
}