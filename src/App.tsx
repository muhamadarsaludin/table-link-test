import { useState } from 'react'
import Counter from './components/counter/Counter.tsx'
import SortDescAge, { MinAge, MaxAge, SortAscAge } from './components/Age.tsx'
import Tabs from './components/tabs/Tabs.tsx'
import Modal from './components/modal/Modal.tsx'
import './App.css'
import UserPage from './pages/userPage.tsx' 

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const tabLabels = ['Tab 1', 'Tab 2', 'Tab 3']

  return (
    <div className='tasks'>
      <div className='task'>
        <h2 className='task-label'>
          1. Counter
        </h2>
        <Counter />
      </div>
      <div className='task'>
        <h2 className='task-label'>
          2. Age Filter and Sort
        </h2>
        <div className='task-content'>
          <MinAge/>
          <MaxAge/>
          <SortAscAge/>
          <SortDescAge/>
        </div>
      </div>

      <div className='task'>
        <h2 className='task-label'>
          3. Tabs
        </h2>
        <div className='task-content'>
          <Tabs labels={tabLabels} onSelect={e => setActiveTab(e)} />
          <div className="TabContent">
            {(() => {
              switch (activeTab) {
                case 1:
                  return <div>Content for Tab 2</div>;
                case 2:
                  return <div>Content for Tab 3</div>;
                default:
                  return <div>Content for Tab 1</div>;
              }
            })()}
          </div>
        </div>
      </div>

      <div className='task'>
        <h2 className='task-label'>
          4. Modal
        </h2>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isModalOpen}
          title="Modal Title"
          content="This is the modal content."
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      <div className='task'>
        <h2 className='task-label'>
          5. Data Tables
        </h2>
        <div className='task-content'>
          {/* <UserPage/> */}
        </div>
      </div>
    </div>
  )
}

export default App
