import React from "react";
import "../components/Card.css";
import Card from "../components/Card";

class ScaryMovie extends React.Component {
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
                    title='Pixie'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8ee7v5u7v5wa1162b07a5.jpg?v=3.7'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='The Last Rite'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/the-last-rite-2-68158.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Hideout'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/hideout-50092.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Antlers'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/antlers-24903.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='The Feast'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/the-feast-18977.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Devil Came Home'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/the-devil-came-home-16320.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Motherly'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/motherly-26223.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Lair'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/lair-73022.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Relic'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/fullhd-relic.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Lanterns Lane'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/lanterns-lane-50858.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Isolation'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/isolation-18483.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='The Spore'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/the-spore-56778.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Hide and Seek'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/hide-and-seek-29905.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Horror Noire'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/horror-noire-15899.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />
                <Card
                    title='The Deep House'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/the-deep-house-16457.jpg'
                    body='Scary movie'
                    passTop={this.passTop}
                />

                <p className='footer-text'>Created by Simge Kavalcı</p>
            </div>


        )
    };

};
export default ScaryMovie;