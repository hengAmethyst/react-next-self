import React from 'react'
import Head from 'next/head'
import Header from '../components/detail/header'
import {bindActionCreators} from 'redux'
import { initStore,test } from '../redux/store'
import withRedux from 'next-redux-wrapper'
// import css from './detail.scss'

class Detail extends React.Component{
    // 初始化props
    static async getInitialProps() {
        return { content:'内容' }
    }
    // 构造函数初始化state
    constructor(props){
        super(props)
        this.state = {
            title: '我是标题'
        }
    }
    componentWillMount(){
        console.log(this.props)

    }
    componentDidMount(){
        console.log(this.state.a,"%%%%")
    }
    // 点击事件 改变redux的state
    click_change(){
        let tem = {
            name:'jiangheng',
            pass:'123456'
        }
        this.props.testAction(tem)
        console.log(this.props,"#")
        this.setState({
            title: '我是标题'
        })
    }
    // 接受子组件内容
    getChild(value){
        console.log(value,'@')
    }
    render(){
        return(
            <div onClick={this.click_change.bind(this)}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
                    {/* <style dangerouslySetInnerHTML={{__html: css}}></style> */}
                    {/* 此处可以用link来链接stylesheet，但是得注意文件的位置为服务器运行的位置，也就是应该是从static中引入,并且是css */}
                    <link rel="stylesheet" type="text/css" href="/static/detail/detail.css"/>
                </Head>
                <Header title={this.state.title} child={this.getChild.bind(this)}/>
                <div className="content">
                    {this.props.content}
                </div>
            </div>
        )
    }
}
// 处理redux
// 把state的映射到对应的props属性上
const mapStateToProps = (state) => ({data:state})
// 把actions绑定到props属性上
const mapDispatchToProps = (dispatch) => {
    return {
        // bindActionCreators用来绑定action和dispatch,这样做就可以不用手动触发dispatch了
        // 可以直接调用testAction来触发action了
        testAction: bindActionCreators(test, dispatch)
    }
}
// 此处需要用到withRedux来处理页面和redux的连接
/**
 * @param 1  来自createStore
 * @param 2  state => props的映射对象
 * @param 3  actions => props的映射 
 */
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Detail)