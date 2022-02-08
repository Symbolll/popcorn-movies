import React from "react";
import "../components/Card.css";
import Card from "../components/Card";

class FamilyMovies extends React.Component {
    constructor(props) {
        super(props)
    }

    passTop = (data) => {
        this.props.addMovie(data);
    }
    render() {
        return (

            <div className="ActionContainer">
                <Card
                    title='The Croods'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/fullhd-the-croods-a-new-age-film-izle.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Robin Robin'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/robin-robin-62062.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Extinct'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/turunun-son-iki-ornegi-extinct-93974.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Familie Claus'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/claus-ailesi-de-familie-claus-65808.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Honey Girls'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/tatli-kizlar-honey-girls-91104.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Black Easter'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/black-easter-9283.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Don Quixote'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/don-kisot-don-quixote-84157.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Storm Boys'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/fullhd-firtina-cocuk-storm-boy.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Water Man'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/the-water-man-8023.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Tom and Jerry'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/tom-ve-jerry-11-82368.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Skater Girl'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/kaykayci-kiz-skater-girl-62719.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Garabet'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/garabet-2-87867.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Real Steel'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/fullhd-celik-yumruklar-turkce-altyazi-izle-hd-720p-nette-ilk.jpg?0.15967172187789713'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Casper'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/sevimli-hayalet-casper-casper-31330.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Week Away'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/hayatimin-kampi-a-week-away-18228.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                />

                <p className='footer-text'>Created by Simge Kavalcı</p>
            </div>


        )
    };

};
export default FamilyMovies;