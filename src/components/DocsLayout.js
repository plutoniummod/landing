import Sidebar from '../components/Sidebar';
import ToC from '../components/ToC';
import Head from 'next/head';
import React, { useMemo } from 'react';
import ExternalLinkIcon from '@heroicons/react/solid/ExternalLinkIcon';
import TranslateIcon from '@heroicons/react/solid/TranslateIcon';
import { useRouter } from 'next/router';
import { basename, dirname, extname } from 'path-browserify';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { useTitles } from '../hooks/useTitles';

const GITHUB_PREFIX = 'https://github.com/plutoniummod/landing/';

const DocsLayout = ({ children, path, anchors, autoTranslated }) => {
    const { asPath, locale, ...rest } = useRouter();
    const titles = useTitles();
    const url = asPath.split('#')[0].replace(/\/$/, '');
    const title = titles[url];

    const newTranslationUrl = useMemo(
        () =>
            GITHUB_PREFIX +
            'new/develop/' +
            dirname(path) +
            '?filename=' +
            basename(path, extname(path)) +
            `.${locale}` +
            extname(path),
        [path, locale]
    );
    return (
        <>
            {autoTranslated && (
                <div className="bg-blue-400 text-black px-4">
                    <div className="container mx-auto py-3 flex items-center">
                        <TranslateIcon className="h-5 w-5 md:h-6 md:w-6 flex-shrink inline mr-3 text-gray-900" />
                        <div>
                            <p className="text-sm font-serif m-0">
                                <FormattedMessage
                                    defaultMessage="This page was machine translated, it may contain some inaccuracies. You can help by <link1>contributing a translation</link1>, or you can alternatively switch to <link2>the English version</link2>."
                                    values={{
                                        link1: (children) => (
                                            <a
                                                className="underline font-semibold"
                                                href={newTranslationUrl}
                                                target="_blank"
                                            >
                                                {children}
                                                <ExternalLinkIcon className="h-4 w-4 inline ml-1" />
                                            </a>
                                        ),
                                        link2: (children) => (
                                            <Link href={asPath} locale="en">
                                                <a className="underline font-semibold">{children}</a>
                                            </Link>
                                        ),
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <main className="container mx-auto py-6">
                <Head>
                    <title>{`${title} - Plutonium Project`}</title>
                </Head>

                <div className="flex">
                    <Sidebar />
                    <div className="flex-grow px-4 py-2 max-w-full">
                        <div className="prose lg:prose-xl font-serif">{children}</div>

                        <div className="pt-10 pb-8">
                            <a
                                className=" text-sm font-semibold bg-gray-800 text-gray-300 py-3 px-3 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                                href={GITHUB_PREFIX + 'edit/develop/' + path}
                                target="_blank"
                            >
                                <FormattedMessage defaultMessage="Edit this page" />
                                <ExternalLinkIcon className="h-4 w-4 inline ml-2 text-gray-400" />
                            </a>
                        </div>
                    </div>
                    <ToC anchors={anchors} />
                </div>

                <style jsx global>{`
                    .prose h1,
                    .prose h2,
                    .prose h3,
                    .prose h4,
                    .prose h5,
                    .prose h6 {
                        font-family: 'Poppins', serif;
                    }

                    // dirty hack to add nav height to anchor location
                    h2:target::before,
                    h3:target::before,
                    h4:target::before,
                    h5:target::before,
                    h6:target::before {
                        content: '';
                        display: block;
                        height: 110px;
                        margin: -110px 0 0;
                    }

                    .prose code {
                        word-break: break-word;
                    }
                `}</style>
            </main>
        </>
    );
};
export default DocsLayout;
