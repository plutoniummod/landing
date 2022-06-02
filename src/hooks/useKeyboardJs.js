import { useEffect, useState } from 'react';
import { useMount } from 'react-use';

// taken from react-use, but patched to call event.preventDefault() to fix:
// https://github.com/plutoniummod/landing/issues/29

const useKeyboardJs = (combination) => {
    const [state, set] = useState([false, null]);
    const [keyboardJs, setKeyboardJs] = useState(null);

    useMount(() => {
        import('keyboardjs').then((k) => setKeyboardJs(k.default || k));
    });

    useEffect(() => {
        if (!keyboardJs) {
            return;
        }

        const down = (event) => {
            event.preventDefault();
            set([true, event]);
        };
        const up = (event) => {
            event.preventDefault();
            set([false, event]);
        };
        keyboardJs.bind(combination, down, up, true);

        return () => {
            keyboardJs.unbind(combination, down, up);
        };
    }, [combination, keyboardJs]);

    return state;
};

export default useKeyboardJs;
