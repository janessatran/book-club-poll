/**
 * This class is used to broadcast custom events from various elements
 */
export class SharedResource {
  receivers: Element[];
  event: string;

  constructor(event: string) {
    this.event = event;
    this.receivers = [];
  }

  addReceiver(receiver: Element) {
    this.receivers.push(receiver);
  }

  addReceivers(receivers: Element[]) {
    this.receivers.push.apply(this.receivers, receivers);
  }

  notify() {
    const self = this;
    this.receivers.forEach((receiver) => {
      return receiver.dispatchEvent(new CustomEvent(self.event));
    });
  }
}
