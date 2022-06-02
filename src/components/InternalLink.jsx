import Link from 'next/link';

const InternalLink = ({ href, to, children, ...rest }) =>
    // dumb workaround, don't know why it's needed, don't care.
    // https://github.com/plutoniummod/landing/issues/4
    (href ?? to).includes('#') ? (
        <a href={href} {...rest}>
            {children}
        </a>
    ) : (
        <Link href={href}>
            <a {...rest}>{children}</a>
        </Link>
    );

export default InternalLink;
