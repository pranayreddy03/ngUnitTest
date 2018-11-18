import {MessageService} from './message.service';

describe('Message Service', () => {

const service: MessageService;

beforeEach(() => {

})

  it('Should have no messages to start with', () => {
    service = new MessageService();

    expect(service.messages.length).toBe(0);
  });

  it('Should add a message when add is called', () => {
    service = new MessageService();
    service.add('message1');

    expect(service.messages.length).toBe(1);
  });

  it('Should clear the messages array when clear function is called', () => {
    // Arrange
    service = new MessageService();
    service.add('message1');

    // Act
    service.clear();

    // Assert
    expect(service.messages.length).toBe(0);
  });
});
