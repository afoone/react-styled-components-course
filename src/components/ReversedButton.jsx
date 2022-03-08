import Button from './Button'

const ReversedButton = props => {
  return (
    <Button {...props} children={props.children.split('').reverse()} />
  )
}


export default ReversedButton