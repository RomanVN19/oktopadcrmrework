import { makeEntitiesFromStructures, use } from 'katejs';
import AppOktopad from 'oktopad-crm/package/AppServer';

import { structures, title, packageName } from './structure';

const AppServer = parent => class Server extends use(parent, AppOktopad) {
  static title = title;

  constructor(params) {
    super(params);
    makeEntitiesFromStructures(this.entities, structures);

    // Entities can be changed by name  this.entities[_entity_name_]
    // You can use class mixins like:
    // this.entities = {
    //   ...this.entities,
    //   Task: Task(this.entities.SessionSchedule),
    // };
  }
};
AppServer.package = packageName;
export default AppServer;
