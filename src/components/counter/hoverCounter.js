import React from 'react';
import PropTypes from 'prop-types';
import UpdatedComponent from './withCounter';

const HoverCounter = () => {
    const { count, incrementCount } = this.props;
    return (
        <h2 onMouseOver={incrementCount}>
            Hovered: {count} times
        </h2>
    );
};

HoverCounter.propTypes = {
    count: PropTypes.number,
    incrementCount: PropTypes.func
};

export default UpdatedComponent(HoverCounter);
