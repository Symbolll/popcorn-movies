import React from "react";
import "../components/Card.css";
import Card from "../components/Card";

class FantasticMovies extends React.Component {
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
                    title='Avatar'
                    imageUrl='https://img-s1.onedio.com/id-52d7c61f43516df04300005f/rev-0/w-900/h-1346/f-jpg/s-d057d94b210c619d07375b1d6053d917f07ba12f.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='David and Elfs'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/david-ve-elfler-25635.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Undergods'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/undergods-37631.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Wanton Want'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/wanton-want-9131.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Black Adam'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/fullhd-black-adam.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='The Flash'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/the-flash-94251.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Dune World'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/dune-world-10597.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Lucky'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/fullhd-lucky-film-izle.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Steel'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/celik-steel-84818.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Injustice'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8eeqv7pqv8a1162b07a5.jpg?v=3.7'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Jungle Cruise'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/orman-gezisi-jungle-cruise-85374.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Hocus Pocus 2'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/hocus-pocus-2-57428.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='The Show'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim_izle/the-show-3-78616.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='Siberia'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/sibirya-siberia-3-81969.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <Card
                    title='47 Ronin'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/fullhd-47-ronin-film-izle.jpg?0.09090138477376697'
                    body='Fantastic movie'
                    passTop={this.passTop}
                />
                <p className='footer-text'>Created by Simge Kavalcı</p>
            </div>


        )
    };

};
export default FantasticMovies;