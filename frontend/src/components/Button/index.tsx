import { Btn } from './styles'

interface ButtonProps {
  openModal: () => void;
  color: string;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({openModal, color, title}) => {
  return (
    <Btn>
      <button type="button" onClick={openModal} style={{backgroundColor: color}}>
        {title}
      </button> 
    </Btn>    
  )

}
