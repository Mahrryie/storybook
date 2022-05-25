import React from 'react';
import {TabBar} from '@rmwc/tabs';
import {Tab} from '@rmwc/tabs';
import '@rmwc/tabs/styles';
import PropTypes from 'prop-types';

const TabsColumns = ({tabsItems, tabsClass, colorScheme}) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <div className={`${colorScheme}-scheme`}>
        <div className={`tabs-column ${tabsClass}`}>
            <div className='tabs-column-wrapper'>
                <TabBar
                    className='tabs-column-items'
                    activeTabIndex={activeTab}
                    onActivate={evt => setActiveTab(evt.detail.index)}
                >
                    {tabsItems.map(({title}, index) => {
                        return (
                            <Tab
                                onClick={() => setActiveIndex(index)}
                                className={index === activeIndex ? 'tabs-column-item active' : 'tabs-column-item'}
                                key={title}
                            > {title} </Tab>
                        );
                    })}
                </TabBar>
            </div>
            <div className='tabs-column-panels'>
                {tabsItems[activeIndex].listItems.map(listItem => (
                    <p key={listItem} className='paragraph'>{listItem}</p>
                ))}
            </div>
        </div>
        </div>
    );
};

export default TabsColumns;

TabsColumns.propTypes = {
    tabsItems: PropTypes.array,
    tabsClass: PropTypes.string,
    colorScheme: PropTypes.string,
}

TabsColumns.defaultProps = {
    tabsItems: [],
    tabsClass: '',
    colorScheme: ''
}
