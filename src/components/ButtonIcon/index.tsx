

import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container } from "./styles";


type Props = TouchableOpacityProps & {
    // title: string;
    type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ type = 'PRIMARY', ...rest }: Props) {

    return (
        <Container
            type={type}

            {...rest}>
            {/* <Title>{title}</Title> */}
        </Container>
    )
}