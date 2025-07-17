/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsConferenceRoomsRoomİdRoomİnfoService {
    /**
     * Returns the streams Ids in the room.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsConferenceRoomsRoomİnfo({
        roomİd,
        accept,
        streamId,
    }: {
        roomİd: string,
        accept?: string,
        /**
         * If Stream Id is entered, that stream id will be isolated from the result
         */
        streamId?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/conference-rooms/{room_id}/room-info',
            path: {
                'room_id': roomİd,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'streamId': streamId,
            },
        });
    }
}
