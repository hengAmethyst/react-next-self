import React from 'react'
import Head from 'next/head'
import css from './header.scss'
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    // 利用this.props调用父组件传下来的方法，向父组件传值
    sendToFa(){
        let data = {
            userName: 'jiangheng'
        }
        this.props.child(data)
    }
    render(){
        return(
            <div className="box">
                <Head>
                    <style dangerouslySetInnerHTML={{__html: css}}></style>
                </Head>
                <div className="header" onClick={this.sendToFa.bind(this)}>
                    {this.props.title}
                </div>
            </div>
        )
    }
}
export default Header