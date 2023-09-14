import {Card} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItem} = props
  const {value, displayText} = directionItem

  return (
    <Card>
      <button type="button">{displayText}</button>
    </Card>
  )
}
