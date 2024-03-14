import { useContext } from 'react';
import NavigationContext from '../context/Navigation';

export default function useNavigation() {
    return useContext(NavigationContext);
}