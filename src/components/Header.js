import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1> {title} </h1>
            <Button color='green' text='Add' onClick={onClick} />
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Manager',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//css in JS
// const headingStyle = {

//     color: 'white', backgroundColor:'black'

// }
export default Header