import sinon from 'sinon';

import {getYoutubeVideosCreator} from './get-youtube-videos';

describe('(Selector) getYoutubeVideos', () => {
  const api = {
    getVideoByTerm: sinon.stub(),
  };

  const selectYoutubeSearchAction = 'selectYoutubeSearchAction';
  const selectYoutubeSearchTerm = sinon
    .stub()
    .returns(selectYoutubeSearchAction);

  const setSelectedVideos = sinon.stub();
  const setYoutubeVideos = sinon.stub();
  const dispatchMock = sinon.stub();

  const getStateAction = 'getStateAction';
  const getStateMock = sinon.stub().returns(getStateAction);

  beforeEach(async () => {
    api.getVideoByTerm.returns([]);
    const getYoutubeVideos = getYoutubeVideosCreator({
      api,
      selectYoutubeSearchTerm,
      setSelectedVideos,
      setYoutubeVideos,
    })();
    await getYoutubeVideos(dispatchMock, getStateMock);
  });

  afterEach(() => {
    api.getVideoByTerm.resetHistory();
    getStateMock.resetHistory();
  });

  it('should call selectYoutubeSearchTerm with result of getState', () => {
    expect(selectYoutubeSearchTerm.calledWith(getStateAction)).toBe(true);
  });

  it('should call getState', () => {
    expect(getStateMock.calledOnce).toBe(true);
  });

  it('should call getVideoByTerm from api', () => {
    expect(api.getVideoByTerm.calledOnce).toBe(true);
  });

  it('should called with result from selectYoutubeSearchAction', () => {
    expect(api.getVideoByTerm.calledWith(selectYoutubeSearchAction)).toBe(true);
  });

  it('should call dispatch twice', () => {
    api.getVideoByTerm.resetBehavior();
    api.getVideoByTerm.returns([1]);
    expect(dispatchMock.calledTwice).toBe(true);
  });

});
