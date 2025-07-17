/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsConferenceRoomsRoomIdService {
    /**
     * Get conference room object
     * @returns string OK
     * @throws ApiError
     */
    public static getV2BroadcastsConferenceRooms({
        roomId,
    }: {
        roomId: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/conference-rooms/{roomId}',
            path: {
                'roomId': roomId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
