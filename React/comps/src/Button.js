import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    const classes = className('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary
    });
    return (
        <button className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    variationValidator: ({ primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!success)
            + Number(!!danger)
        
        if (count > 1) {
            return new Error('You can only apply one variation');
        }
    }
};

export default Button;