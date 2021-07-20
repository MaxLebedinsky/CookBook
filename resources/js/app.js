require('./bootstrap')
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import Layout from "./components/layout";

render((<Provider store={store}>
        <Layout>
        </Layout>
    </Provider>),
    document.getElementById('app'),
)
