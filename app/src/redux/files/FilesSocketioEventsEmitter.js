import Connector from '../SocketConnector.jsx';


class FilesSocketioEventsEmitter {
    /* Singleton class for managing events subscription for the files */
    constructor() {
        this.connector = new Connector('files');
    }

    renewSingleHost(project_uuid, hostname) {
        this.connector.emit('files:all:get:single', {
            "project_uuid": project_uuid,
            "hostname": hostname
        });
    }

    requestFilesHosts(project_uuid, host, port_number, limit, offset, filters) {
        this.connector.emit('files:get:hosts', {
            "project_uuid": project_uuid,
            "host": host,
            "port_number": port_number,
            "limit": limit,
            "offset": offset,
            "filters": filters
        });
    }

    requestFilesIps(project_uuid, ip, port_number, limit, offset, filters) {
        this.connector.emit('files:get:ips', {
            "project_uuid": project_uuid,
            "ip": ip,
            "port_number": port_number,
            "limit": limit,
            "offset": offset,
            "filters": filters
        });
    }
}

export default FilesSocketioEventsEmitter;
