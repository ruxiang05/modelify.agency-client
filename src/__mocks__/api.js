const jobMock = {
  status: 'in progress',
  _id: '5c97b9cd0328e6b2aa76a361',
  model: '5c686eb24cb1b33456b0be59',
  agent: '5c686e904cb1b33456b0be58',
  title: 'Test',
  date: '2019-05-26T00:00:00.000Z',
  address: 'address',
  pay: 100,
  description: 'some description',
};

const api = {
  jobs: {
    getJobs: jest.fn(() => Promise.resolve({
      jobs: [jobMock],
    })),
    acceptJob: jest.fn(() => Promise.resolve({
      job: jobMock,
    })),
    completeJob: jest.fn(() => Promise.resolve({
      job: {
        ...jobMock,
        status: 'complete',
      },
    })),
    declineJob: jest.fn(() => Promise.resolve({
      job: {
        ...jobMock,
        status: 'declined',
      },
    })),
    addJob: jest.fn(() => Promise.resolve()),
  },
  googleCalendar: {
    addEvent: jest.fn(() => Promise.resolve()),
    authorize: jest.fn(() => Promise.resolve({ message: 'success', token: 'test' })),
    getAuthURL: jest.fn(() => Promise.resolve({ redirect: '/redirect' })),
  },
  agents: {
    getModels: jest.fn(() => Promise.resolve({
      agent: {
        agentInfo: {
          models: [
            {
              _id: '5ca24d217736960017cae87c',
              agentInfo: { models: [] },
              email: 'jane@doe.com',
              modelInfo: {
                address: '',
                characteristics: {
                  eyes: '',
                  hair: '',
                  skin: '',
                  dateOfBirth: '',
                },
                measurements: {
                  chest: '',
                  height: '',
                  hips: '',
                  waist: '',
                  weight: '',
                },
                name: 'Jane Doe',
                phoneNumber: '07423360809',
                role: 'model',
              },
            },
          ],
        },
      },
    })),
    addModel: jest.fn(() => Promise.resolve()),
  },
  chats: {
    getMessages: jest.fn(() => Promise.resolve({
      messages: [
        {
          message: 'hi',
          user: '1',
        },
        {
          message: 'hello',
          user: '2',
        },
      ],
    })),
    getChats: jest.fn(() => Promise.resolve({
      chats: [
        {
          id: '2t3457345',
          job: {},
          messages: [],
          users: ['1', '2'],
        },
      ],
    })),
  },
  users: {
    signup: jest.fn(() => Promise.resolve({ ok: true })),
    login: jest.fn(() => Promise.resolve({ token: 'abc' })),
    editProfile: jest.fn(() => Promise.resolve({ token: 'abc' })),
  },
};

module.exports = api;
