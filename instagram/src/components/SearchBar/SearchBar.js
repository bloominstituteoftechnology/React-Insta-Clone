import React, {Component} from 'react';


class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }

    onChange = event => {
        let myEvent = event.target.value;
        this.setState({text: myEvent});
   }
    
    render() {
        return (
            <div className="div-box">
                <img className="CameraIcon" src="https://ih0.redbubble.net/image.232042701.7145/flat,800x800,075,t.u1.jpg" />
                <img className="InstaLogo" src="https://socialnewsdaily.com/wp-content/uploads/2014/04/instagram-logo.jpg" />
                <input type="text" value={this.state.text} className="search-box" onChange={this.onChange} placeholder="Search"></input>
                <img className="compassIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADACAMAAAB21dzBAAAAclBMVEX///9MTExSUlJJSUlDQ0M+Pj5OTk5ycnJAQEBFRUXl5eVYWFjr6+tsbGz6+vrm5ualpaViYmLx8fGYmJjExMTd3d1+fn5eXl5nZ2fV1dV3d3epqamNjY2GhoaysrKdnZ3Jycm7u7vX19c3NzeSkpIxMTFJays2AAAMAklEQVR4nN2cfZuqLBDGE5TwJVNLUyuzdvf7f8UHNGFAqz37+FLc51znj91O8WtmYBhGVqvplYQzfMgcStOlRzCSbvulRzCSisvSIxhJt/PSIxhJaW5ItAf+dukhjKPAqpcewjjaouPSQxhHHjotPYRx5KH10kMYRx7xk6XHMIo8Yt2WHsMo8hAxI0nxEDIjSWEg2dJjGEXMtWIjkhQGgoKlBzGGPGSReulBjCEGgqqlBzGGOIgRSQoHMSJJ4SBGJCk82IkJSQoHQdelRzGCGhATkpQGxIQkZctBTEhSOAhBBlRSGhATkpTWIgYkKS2IAUlKC2JAktKCGJCktMFuQJLSghiQpNxBPj9JuYN8fpJyB/n8JOUe7J+fpNxBPj9J6Szy8UlKcAf5+CSlA/n4JKVzLX/pgfxJYVB3LSgpaYOdnK63D0u4vOtpg2iXk3QgbMNLDuXu+iEF7bDYbRBCxMJdligsgnkWzFQeb2+/OKZRTjiFZWGRtwOQRvwFm+M7L4/hvmTeQ9rh2mKSkiB3kobFP9dvapak2rS2aEXFsiFALAHSsuTVG6KEVYwQGKdFRd8GACHwFYzl/VD2G6QO0rLr7ncChGBLE0N5q/1WmqnWYHItT/yW4A7E7aEglHnP3npWHXUMTCkuhdME6A5ioQOmts6C/DdpHvJK1asYBcoq0FkqQPAhuB1Ly3F1/yrfwShXXzEHdqxMW7ulRTDHS6OYUt0oy/d47BRzuA767nX5Bn4XI/esJbyWLlU8jJBo9pErSjLIgR3/MrBgA5Bd97M6cxWrEHReMp/0NtCtKN4NDgaAgEpKvaZKrKByOZL0IDmIS8sHtUQJgpVKyjV2oH+hzVLpF+SwqP9wZQMgaiUlvGAbeCbKl5m8AAfBTvn465QgYLlvVeQOtEm8hE08wOG6zyYdCUKovvYlZ+heKJ8/ThIZ58RG9bOXQpB+JSWyQSqJ1rOTZJKDHp4/IAJA3IFKSuW6gCSbOR3eAY78hWcDEDx03LN3oU12/RdMqKtYBxnHq2ICAJEbeeXdQFJM0JzZytYHHC+9GoAQOjhJVyBhIf6Mk3DZORZxm4/dP90dKSA9z/Fq9s8FzMJoPVuYHEWAYFzwHyTnvH78cgVEP+7x1o0BMgeEyVwJpCcTRaersGc/64e+DUGwdtzjkdZESSzXeIJmci4x8xJHPj11+qGbBygKiDrIFFn3EEtBiQWVk40dqhYGcQ8g0E8OpZvrkHtDEDVJKdCPcKMKhskcFYkwFxGiZk5nx7JpPoACQZQkpSYOWFdKKp3rMMMCXw05ViNGwlF6papEAZFJyh67DohrDzrX9PWIMO++N0z0mOQkbLcbF+qPFRCZpFxdV13oj9K5ZmimvwrHcvodAA2J9aWtFQqIGDtbBImjTLThxpYmmfrAUUaIO5A2hQ0J1dYBBcRqV55VxDj0t6jpfCappUGGlq2GRN90KCD3JOXCtyG9tyglydQT17kDwWhwYgkzx6KaW2gg3PG+OUffpsAkE3d8BGINcb6HX8FInoPYGV9zhm0KomTiR04qmWU9ar8Ksx/NK1QQHCftnDBkU7AqThvu6w7E3jx+UaalKiqIheIfh+tnYAsVILGWTJqneER41sMVa3u7PJu12FS1u0SXy2U3WM3LRJRMmjqKRQRbA5+SpNcoy5FLtWlLAbFR0f+f4BNAuE+4VTw/8qxtUe3WB2w7lO9asRrGEMT2n7c2buWp1oS79/AgPEus6o0ZNsh1HFvuvFUSAGL7r27kWIt5a8LelZsIEZt/r9viCMygSCGRIPaLwhHT7qt7rwknYB4ihP1hM2d15NGgmEEjkZmYAKGH1/Fb+1b3zTwv+/0fXRDfpTdyB8zwiKQDofFv5qEk3Udn5qvUwRPl8km65hjc6OQZQo/kDkL/pUQdsNkjG78Isb2xaIjx3bF+KUHSgrwu5PU0ZgLcGDpHvKnnV3ZQSXYShG4W625qJqUY/4lBIeEgdP4y++r/mWGAhIE4s3P8fzP0SRL/a86Dzn8yAx6U28iGoj+nMATtHNPKq6NT7rOFgY/FVgci5LC/nSgYvdU0viPk+4dDHOf5RmjNVJabaj9Lwy+HKLOybD40y7Lz+Xw6fe92LNeWOjJV1eXU6Pv7O0qBPKbtNgiCJEnCga8+uUbNG7a6tILv3KqSugLtO9VARatbmm6DbVrUxS1YhYMfPqa2lwJ9tUZ9LNqX4hmuJu48zBsIc/K4vFS3Geb2wM9Xnk9HmDmAuDMTfNh8H4u5joWC+IvtWVPfHoekjUeCNlm0T+ec0oOY2nzzPQJJi4Dj9a66zd5YwDhIA7K6ob+TtG3Plr85MzMs0s3JOawW5I8krRmsnAV0ulwresPRgayKfyRpeumZGU7H2hvZDN6/RVfLIVuyC+L+jqTNLLDlX67TBPQ6Lr+r4reBducAveW/IMG8CeKeM6DJ7nc8NdtplJ8vvyg5dRwAZFU/IcGu7Tguit173jPlPRFt5Re79Mt6GXiCA4KsamuABGObOrbF59UiqKjYhk5XoStEWkxffYbkUEB0Em4Gitm8etzfA/oka6ZkstUiES0ozosq4FZyqCCrGrckjRnc3rwa5qJjk+RTMLQSPSju8+tJIYcGwmxit2ZYD82rN9l5ih6cwIyhSByPuIMl3KBVCjl0kFWds0Tp0bwagQOSCYvYsmY6cKS7Wh2Jz4TPRwfGgQ4SPqu7gSOrKa8kAGe6A6euAbLZzOkcglppstZBEvJ4x3iTTy9Ne4goOwAH5i3edNXUEz3lGaQeiP/1kOR7rqO3QvhMr/GqOTZr66Jh7D4DObjOA5LEB4+TTbpjkr6FsX5CwAzS1Xcz+gQkPLjWAxLQxDF1q5M81qVaJsSfEqGHdg2LnGcg3F56Q077mwOYfCduGJBrItYOqC+OPP/YP7VI43hDJOBwevoLaUG4K8ZnBpHnOEq06yCrdXMo1SdJfGCQydt/QUOjMnFdHHAepUR7D2T7jZpOlLM2g++AQWZoa/yWqzvocwuQA8/VYLT3QNi3seMoGskNHIHNcRtBIJuXQT/K5UfpO4bRPgDCq3bIcR3YCB/msltrnj5TmXBhu3OuACNlNt4/t0jzXy6+8wVIdrA5c5YG+SSWztV9c9/aqgKj/QEIe6PI/xF1+qvSVT5P6e0KnlRo2789/fwcRvtDEI5ibdox3+A8N9s986KTo2vbOvb6S0C0PwFhKLsT31YlB1Aqmql/eQXjve37C/ueAKL9KQh7M+adyRpsYOZ8XEE6Fwv4wVxi/0uLNErWyiNjc95oA5wLu0MkINpfgmgcs15fBWYugu2B2ATR/gpE45j5wbcCPKOLh2oqMtpfxcgGcpCXfVBja08gSdb7GmW0PwcpDrBQQRa487+Cz007sV5V2f/OIpXykOsyV1dBEmJbWqDIaH+2IJ4crHAsc2mCQoKdUvFuGe2PQfYHGB6LcWjeZVESwUgR0f4IJD3bSh14OQ6+MMIH87ETg+d5RLQPgwQXopiDxfmSN6QU8JF2lg2D53n2zyzS7qygkF/POfD+iNYKiWXT+H5Pk4j2HkhYn4mGwdbBpa86Tc7aXTuug87NfSLdAYEKkhS7WLuCY/GrK+6q1ItR2hteyqgo7R5IWp0Prn6/C7925z1uPkxL/QIkzuIOTL/5F+1RMHOsl3YroaPfQ2Fr5H2tc0UfPXioAmD4xze6mso7Ef06J9JdHCBB6r45EDq/w71BQEWJVKuQLouSIEfawyjrBcf8QPuMqCj3YJcgZ+2WnbfE4CpOCJqlB7JxFYxzveBYXyiNNuJewC7aBYiIdd7yk0dvFhs9FZfmpkYiol2ANLHeNPFtdu96taGikK17MR+vBlLZ3PPi7LhM89jfFKbX6J68CJBdnF3mbUQcS225Wzz4/UF20LRv2nyGrtn5MHmmgIRNGc8AkPbiERNAIlNAmmg3AcQzBaSJdhNAmmg3AiQyBYRHuxEgnikgPNqNAOHRbgZIZAoIi3YzQDxTQFi0mwHCot0QkMgUkL0hsxY/gTMDJIwNAVllpoBEpoDsX3fQfYa8Z7e8fZJC3xCLrEpTQHamgFxNAfFMAQn1B14+VtEnnrYNqTYFJJnDtf4D2nuyIq4jidcAAAAASUVORK5CYII=" />
                <img className="HeartIcon" src="https://i.pinimg.com/originals/c0/aa/30/c0aa308ed2b4105dceafea15ee46a59b.jpg" />
                <img className="FriendIcon" src="http://thespaceglobalmastermind.com/wp-content/uploads/2017/08/person-icon-grey.png" />
            </div>
        );
    }
}

export default SearchBar


