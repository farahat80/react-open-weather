import { expect, assert } from 'chai';
import { sinon, spy, fakeServer, sandbox, stub } from 'sinon';
import { mount, render, shallow, spyLifecycle, describeWithDOM } from 'enzyme';

global.sandbox = sandbox;
global.expect = expect;
global.assert = assert;
global.sinon = sinon;
global.spy = spy;
global.stub = stub;
global.fakeServer = fakeServer;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.spyLifecycle = spyLifecycle;
global.describeWithDOM = describeWithDOM;