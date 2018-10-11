import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {YoutubeSearch} from './youtube-search';
import {SearchBar} from './components/search-bar';
import VideoList from './components/video-list';

describe('(Component) YoutubeSearch', () => {
  let wrapper;
  const YTSearchSpy = sinon.spy();

  function generateWrapper(passedProps) {
    const defaultProps = {
      YTSearch: YTSearchSpy,
    };
    const props = {...defaultProps, ...passedProps};

    return shallow(<YoutubeSearch {...props}/>);
  }

  beforeEach(() => {
    wrapper = generateWrapper();
  });

  afterEach(() => {
    YTSearchSpy.resetHistory();
  });

  it('should renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render SearchBar', () => {
    expect(wrapper.find(SearchBar).exists()).toBe(true);
  });

  it('should pass correct props to VideoList', () => {
    const mockData = [1, 2, 2];
    // wrapper.setState({videos: mockData});

    // wrapper.find(SearchBar).prop('onSearchTermChange')();
    expect(YTSearchSpy.args[0]).toEqual({});
    // expect(wrapper.find(VideoList).prop('videos')).toEqual(mockData);
  });
});