import React from "react";
import "../components/Card.css";
import Card from "../components/Card";

class DramaMovies extends React.Component {
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
          title='The Unholy'
          imageUrl='https://turkcealtyazi.org/images/poster/9419056.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Margin Call'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/Oyunun-Sonu-Margin-Call.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Passing'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/siyah-beyaz-passing-12246.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Nine Days'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/nine-days-51799.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Good Joe Bell'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/good-joe-bell-71566.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Time Now'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/time-now-94808.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Not to Forget'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/not-to-forget-16738.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Atlantis'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/fullhd-atlantis-2011.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Antlers'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/antlers-24903.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Supernova'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/supernova-1150.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Zeros and Ones'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/zeros-and-ones-29786.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='The Deep House'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/the-deep-house-16457.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Bruised'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/bruised-68113.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Miami Heat'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/miami-heat-22884.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />
        <Card
          title='Mixtape'
          imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/kirik-kaset-mixtape-47531.jpg'
          body='Drama movie'
          passTop={this.passTop}
        />

        <p className='footer-text'>Created by Simge Kavalcı</p>

      </div>


    )
  };

};
export default DramaMovies;