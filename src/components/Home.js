import React from 'react';
import './Card.css'
import Card from './Card'



class Home extends React.Component {
    constructor(props){
        super(props)
    }

passTop = (data) => {
    this.props.addMovie(data);
}

deleteTop=(data)=> {
    this.props.deleteMovie(data);
}

    render() {
        return (
            <div className='container'>
                <Card
                    title='Avatar'
                    imageUrl='https://img-s1.onedio.com/id-52d7c61f43516df04300005f/rev-0/w-900/h-1346/f-jpg/s-d057d94b210c619d07375b1d6053d917f07ba12f.jpg'
                    body='Fantastic movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='The Unholy'
                    imageUrl='https://turkcealtyazi.org/images/poster/9419056.jpg'
                    body='Drama movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='Fast & Furious 9'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8eeq8uu7u5a1162b07a5.jpg?v=3.7'
                    body='Action movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='Doctor'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8ee77uk8ovpa1162b07a5.jpg?v=3.7'
                    body='Action movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='The Croods'
                    imageUrl='https://resim.fullhdfilmizlesene.pw/mdsresim/fullhd-the-croods-a-new-age-film-izle.jpg'
                    body='Family movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='Red Notice'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8eekoo7wv5a1162b07a5.jpg?v=3.7'
                    body='Action movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='Margin Call'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8ee7w7q78ka1162b07a5.jpg?v=3.7'
                    body='Drama movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='Black Adam'
                    imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBcKRMmp6NKEhy2mTW0h4Fbk8h6w-N3hfwzFo9ddJLmy5F46a-PcUewAX-gaxxb7_LSVg&usqp=CAU'
                    body='Action movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='Passing'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8ee55ouok8a1162b07a5.jpg?v=3.7'
                    body='Drama movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='John Wick 4'
                    imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnUBePoEhs1ZcK8ip2PAkNMejB_SSivSXo4N5PVwWqZYomncXKQOO4r1b4tUJNI1A9iE&usqp=CAU'
                    body='Action movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='Nine Days'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8ee7v8q75qpa1162b07a5.jpg?v=3.7'
                    body='Drama movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='Pixie'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8ee7v5u7v5wa1162b07a5.jpg?v=3.7'
                    body='Scary movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                <Card
                    title='Casper'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8eev77pw8pa1162b07a5.jpg?v=3.7'
                    body='Family movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                 <Card
                    title='Week Away'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8ee77u55pk5a1162b07a5.jpg?v=3.7'
                    body='Family movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
                 <Card
                    title='47 Ronin'
                    imageUrl='https://images-720pizle-vip.cdn.ampproject.org/i/s/images.720pizle.vip/images/movie/poster/300/430/100/b47b8ee7uuqokqa1162b07a5.jpg?v=3.7'
                    body='Fantastic movie'
                    passTop={this.passTop}
                    deleteTop={this.deleteTop}
                />
  <p className='footer-text'>Created by Simge Kavalcı</p>
            </div>
            
        )
    };

};
export default Home;