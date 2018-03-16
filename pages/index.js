import React from 'react'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/Layout'
import Home from '../components/Home'

class App extends React.Component {
    componentDidMount () {
        //this.timer = this.props.startClock()
        console.log(this.props)
    }
    
    componentWillUnmount () {
        //clearInterval(this.timer)
    }
    
    render () {
        return (
            <Layout title={`图书商城`}>
                <Home />
            </Layout>
        )
    }
}
const mapStateToProps = (state) => ({data:state})

const mapDispatchToProps = (dispatch) => {
    return {
        //addCount: bindActionCreators(addCount, dispatch),
        //startClock: bindActionCreators(startClock, dispatch)
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(App)