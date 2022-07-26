import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

const ToC = ({ anchors }) => {
    if (!anchors.length) {
        return null;
    }

    return (
        <div className="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8">
            <div className="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) pt-2 pb-6 top-24">
                <div className="mb-8">
                    <h5 className="text-gray-200 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs">
                        <FormattedMessage defaultMessage="On this page" />
                    </h5>
                    <ul className="overflow-x-hidden font-medium table-of-contents h-screen-4/5">
                        {anchors.map(({ text, url, depth }, i) => (
                            <li
                                key={i}
                                className={classNames({
                                    'ml-2': depth === 3,
                                    'ml-4': depth === 4,
                                    'ml-6': depth === 5,
                                    'ml-8': depth === 6,
                                })}
                            >
                                <a
                                    href={url}
                                    className="block transform transition-colors duration-200 py-2 hover:text-gray-100 text-gray-300"
                                >
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ToC;
