import { ReactNodeArray } from "prop-types";

interface Props {
    children: ReactNodeArray
}

const Providers = ({ children }: Props) => {

    return (
        <> 
            {children}
        </>
    );
};

export default Providers;