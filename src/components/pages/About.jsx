import React from 'react';
import {Page, Accordion, AccordionContent, AccordionItem, AccordionToggle, Tabs, Tab,
    Card, CardContent, CardFooter, CardHeader, Swiper, SwiperSlide} from 'framework7-react';

export const About = () => {
    return (
        <Page>
            <Swiper>
                <SwiperSlide>
                    <p id="swiperTitle">Ponedjeljak</p>
                    <Card id="lecture">
                        <AccordionItem>
                            <AccordionToggle>
                                <CardHeader>Karijerni špancir</CardHeader>
                                <CardFooter>
                                    <p>FOI hodnici</p>
                                    <p>16:00 - 18:00</p>
                                </CardFooter>
                            </AccordionToggle>
                            <AccordionContent id="eventContent">
                                <p>Karijerni špancir odnosi se na dio programa na kojem će predstavnici poduzeća zauzeti
                                    FOI hodnike, točnije prizemlje, 1. i 2. kat, te donijeti svoje promotivne materijale i
                                    mnogo dobre volje da zainteresiranim studentima približe kako je to raditi u njihovom
                                    poduzeću. Iz prve ruke možete saznati više o traženim pozicijama, o uvjetima i potrebnim
                                    vještinama te o beneficijama koje pojedina poduzeća nude.</p>
                                <p>UPUTE ZA STUDENTE: na prizemlju na info pultu dijelit će se prazne
                                    akreditacije s vezicama, koje uzimate prije no što krenete obilaziti poduzeća.
                                    Na akreditacije upisujete ime, prezime i smjer studija. Birat ćete i naljepnice
                                    prema određenim vještinama/interesima koji vas opisuju i lijepiti na akreditacije.
                                    Na taj način poduzećima omogućujete da vas i zami zamijete s obzirom na vaše vještine,
                                    interese ili usmjerenja, što bi trebalo olakšati komunikaciju.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                    <Card id="workshop">
                        <AccordionItem>
                            <AccordionToggle>
                                <CardHeader>Karijerni špancir</CardHeader>
                                <CardFooter>
                                    <p>FOI hodnici</p>
                                    <p>16:00 - 18:00</p>
                                </CardFooter>
                            </AccordionToggle>
                            <AccordionContent id="eventContent">
                                <p>Karijerni špancir odnosi se na dio programa na kojem će predstavnici poduzeća zauzeti
                                    FOI hodnike, točnije prizemlje, 1. i 2. kat, te donijeti svoje promotivne materijale i
                                    mnogo dobre volje da zainteresiranim studentima približe kako je to raditi u njihovom
                                    poduzeću. Iz prve ruke možete saznati više o traženim pozicijama, o uvjetima i potrebnim
                                    vještinama te o beneficijama koje pojedina poduzeća nude.</p>
                                <p>UPUTE ZA STUDENTE: na prizemlju na info pultu dijelit će se prazne
                                    akreditacije s vezicama, koje uzimate prije no što krenete obilaziti poduzeća.
                                    Na akreditacije upisujete ime, prezime i smjer studija. Birat ćete i naljepnice
                                    prema određenim vještinama/interesima koji vas opisuju i lijepiti na akreditacije.
                                    Na taj način poduzećima omogućujete da vas i zami zamijete s obzirom na vaše vještine,
                                    interese ili usmjerenja, što bi trebalo olakšati komunikaciju.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                    <Card id="event">
                        <AccordionItem>
                            <AccordionToggle>
                                <CardHeader>Karijerni špancir</CardHeader>
                                <CardFooter>
                                    <p>FOI hodnici</p>
                                    <p>16:00 - 18:00</p>
                                </CardFooter>
                            </AccordionToggle>
                            <AccordionContent id="eventContent">
                                <p>Karijerni špancir odnosi se na dio programa na kojem će predstavnici poduzeća zauzeti
                                    FOI hodnike, točnije prizemlje, 1. i 2. kat, te donijeti svoje promotivne materijale i
                                    mnogo dobre volje da zainteresiranim studentima približe kako je to raditi u njihovom
                                    poduzeću. Iz prve ruke možete saznati više o traženim pozicijama, o uvjetima i potrebnim
                                    vještinama te o beneficijama koje pojedina poduzeća nude.</p>
                                <p>UPUTE ZA STUDENTE: na prizemlju na info pultu dijelit će se prazne
                                    akreditacije s vezicama, koje uzimate prije no što krenete obilaziti poduzeća.
                                    Na akreditacije upisujete ime, prezime i smjer studija. Birat ćete i naljepnice
                                    prema određenim vještinama/interesima koji vas opisuju i lijepiti na akreditacije.
                                    Na taj način poduzećima omogućujete da vas i zami zamijete s obzirom na vaše vještine,
                                    interese ili usmjerenja, što bi trebalo olakšati komunikaciju.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <p id="swiperTitle">Utorak</p>
                    <Card id="lecture">
                        <AccordionItem>
                            <AccordionToggle>
                                <CardHeader>Croatian Makers – Stvaranje kulture uspjeha</CardHeader>
                                <CardFooter>
                                    <p>Dvorana 1 (FOI 1)</p>
                                    <p>09:30 - 10:30</p>
                                </CardFooter>
                            </AccordionToggle>
                            <AccordionContent id="eventContent">
                                <p>OPIS PREDAVANJA:</p>
                                <p>Institut za razvoj i inovativnost mladih – IRIM razvija veliki, globalno
                                    jedinstiveni program izvankurikularne STEM edukacije u Hrvatskoj i šire.
                                    Pokret Croatian Makers u Hrvatskoj se sastoji od obitelji platformi koji čine
                                    koherentan sustav. STEM područja su jezgra suvremenog kurikuluma i time su
                                    IRIM-ove aktivnosti iznimno bitne u Hrvatskoj u kojoj to područje stoji naročito loše.</p>
                                <p>Međutim, mi ih vidimo i daleko šire: kao alat za razvoj dubljih ključnih kompetencija
                                    koje su još deficitarnije u hrvatskom školstvu kao što su kritičko razmišljanje i vještina
                                    rješavanja problema, kreativnost, vještine suradnje, komunikacije; zatim inicijative,
                                    znatiželje i upornosti. IRIMsvojim dosegom do preko 1000 edukativnih organizacija ima
                                    veliki utjecaj na razvoj tih kompetencija u hrvatskom školstvu i stvaranjem kulture uspjeha
                                    kod mladih.</p>
                                <p>O PREDAVAČU:</p>
                                <p>Hrvatski poduzetnik i investitor,
                                    trenutno najviše posvećen digitalnoj transformaciji u obrazovanju u Hrvatskoj i drugim zemljama
                                    – osnivač IRIM-a, vodeće filantropske organizacije za uvođenje STEM edukacije u
                                    obavezno obrazovanje.</p>
                                <p>Matematičar po obrazovanju, s karijerama u znanosti, digitalnim medijima, financijama
                                    i ljudskim resursima. Višestruki osnivač start-upova s nekoliko uspješnih 'izlazaka',
                                    a kompanije koje je osnovao, još su u njegovom vlasništvu su tržišni lideri u
                                    svojim područjima. Kao investitor u javna dionička društva, najpoznatiji je hrvatski
                                    aktivistički investitor.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <p id="swiperTitle">Srijeda</p>
                    <Card id="lecture">
                        <AccordionItem>
                            <AccordionToggle>
                                <CardHeader>Karijerni špancir</CardHeader>
                                <CardFooter>
                                    <p>FOI hodnici</p>
                                    <p>16:00 - 18:00</p>
                                </CardFooter>
                            </AccordionToggle>
                            <AccordionContent id="eventContent">
                                <p>Karijerni špancir odnosi se na dio programa na kojem će predstavnici poduzeća zauzeti
                                    FOI hodnike, točnije prizemlje, 1. i 2. kat, te donijeti svoje promotivne materijale i
                                    mnogo dobre volje da zainteresiranim studentima približe kako je to raditi u njihovom
                                    poduzeću. Iz prve ruke možete saznati više o traženim pozicijama, o uvjetima i potrebnim
                                    vještinama te o beneficijama koje pojedina poduzeća nude.</p>
                                <p>UPUTE ZA STUDENTE: na prizemlju na info pultu dijelit će se prazne
                                    akreditacije s vezicama, koje uzimate prije no što krenete obilaziti poduzeća.
                                    Na akreditacije upisujete ime, prezime i smjer studija. Birat ćete i naljepnice
                                    prema određenim vještinama/interesima koji vas opisuju i lijepiti na akreditacije.
                                    Na taj način poduzećima omogućujete da vas i zami zamijete s obzirom na vaše vještine,
                                    interese ili usmjerenja, što bi trebalo olakšati komunikaciju.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <p id="swiperTitle">Četvrtak</p>
                    <Card id="lecture">
                        <AccordionItem>
                            <AccordionToggle>
                                <CardHeader>Karijerni špancir</CardHeader>
                                <CardFooter>
                                    <p>FOI hodnici</p>
                                    <p>16:00 - 18:00</p>
                                </CardFooter>
                            </AccordionToggle>
                            <AccordionContent id="eventContent">
                                <p>Karijerni špancir odnosi se na dio programa na kojem će predstavnici poduzeća zauzeti
                                    FOI hodnike, točnije prizemlje, 1. i 2. kat, te donijeti svoje promotivne materijale i
                                    mnogo dobre volje da zainteresiranim studentima približe kako je to raditi u njihovom
                                    poduzeću. Iz prve ruke možete saznati više o traženim pozicijama, o uvjetima i potrebnim
                                    vještinama te o beneficijama koje pojedina poduzeća nude.</p>
                                <p>UPUTE ZA STUDENTE: na prizemlju na info pultu dijelit će se prazne
                                    akreditacije s vezicama, koje uzimate prije no što krenete obilaziti poduzeća.
                                    Na akreditacije upisujete ime, prezime i smjer studija. Birat ćete i naljepnice
                                    prema određenim vještinama/interesima koji vas opisuju i lijepiti na akreditacije.
                                    Na taj način poduzećima omogućujete da vas i zami zamijete s obzirom na vaše vještine,
                                    interese ili usmjerenja, što bi trebalo olakšati komunikaciju.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <p id="swiperTitle">Petak</p>
                    <Card id="lecture">
                        <AccordionItem>
                            <AccordionToggle>
                                <CardHeader>Karijerni špancir</CardHeader>
                                <CardFooter>
                                    <p>FOI hodnici</p>
                                    <p>16:00 - 18:00</p>
                                </CardFooter>
                            </AccordionToggle>
                            <AccordionContent id="eventContent">
                                <p>Karijerni špancir odnosi se na dio programa na kojem će predstavnici poduzeća zauzeti
                                    FOI hodnike, točnije prizemlje, 1. i 2. kat, te donijeti svoje promotivne materijale i
                                    mnogo dobre volje da zainteresiranim studentima približe kako je to raditi u njihovom
                                    poduzeću. Iz prve ruke možete saznati više o traženim pozicijama, o uvjetima i potrebnim
                                    vještinama te o beneficijama koje pojedina poduzeća nude.</p>
                                <p>UPUTE ZA STUDENTE: na prizemlju na info pultu dijelit će se prazne
                                    akreditacije s vezicama, koje uzimate prije no što krenete obilaziti poduzeća.
                                    Na akreditacije upisujete ime, prezime i smjer studija. Birat ćete i naljepnice
                                    prema određenim vještinama/interesima koji vas opisuju i lijepiti na akreditacije.
                                    Na taj način poduzećima omogućujete da vas i zami zamijete s obzirom na vaše vještine,
                                    interese ili usmjerenja, što bi trebalo olakšati komunikaciju.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                </SwiperSlide>

            </Swiper>
        </Page>
    );
};
