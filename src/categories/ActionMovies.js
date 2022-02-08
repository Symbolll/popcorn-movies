import React from "react";
import "../components/Card.css";
import Card from "../components/Card";

class ActionMovies extends React.Component {
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
                    title='John Wick 4'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/john-wick-4-chapter-70076.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Infinite'
                    imageUrl='https://tr.web.img4.acsta.net/c_310_420/pictures/21/06/10/10/03/0580430.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Red Notice'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/red-notice-77927.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Doctor'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/doktor-bey-doctor-73489.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Fast & Furious 9'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/hizli-ve-ofkeli-9-fast-furious-9-izlehd-8370.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Venom'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/venom-zehirli-ofke-2-14377.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Nobody'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/nobody-2-19630.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='No Time to Die'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/olmek-icin-zaman-yok-2-30902.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Deadlock'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/deadlock-2-29015.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Castle Falls'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/castle-falls-23827.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Alley Cats'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/sokak-kedileri-alleycats-65571.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Black Widow'
                    imageUrl='https://upload.wikimedia.org/wikipedia/tr/5/55/Black_Widow_As%C4%B1l_Afi%C5%9F.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Ida Red'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/ida-red-60697.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Bigfoot Famous'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/bigfoot-famous-28109.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />
                <Card
                    title='One Shot'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/one-shot-67638.jpg'
                    body='Action movie'
                    passTop={this.passTop}
                />


                <p className='footer-text'>Created by Simge Kavalcı</p>

            </div>


        )
    };

};
export default ActionMovies;