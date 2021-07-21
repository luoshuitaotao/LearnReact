import { ChildAsFC } from './Child';

const Parent = () =>{
    return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
        hgkjhgkjh
    </ChildAsFC>;
};
export default Parent;