import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { QueryClient, QueryClientProvider } from 'react-query'
import HomePage from './containers/HomePage'
import './App.css'

const queryClient = new QueryClient()
const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
