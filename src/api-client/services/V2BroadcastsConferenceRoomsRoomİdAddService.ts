/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsConferenceRoomsRoomİdAddService {
    /**
     * Adds the specified stream with streamId to the room.  Use PUT conference-rooms/{room_id}/{streamId}
     * @returns any OK
     * @throws ApiError
     */
    public static putV2BroadcastsConferenceRoomsAdd({
        roomİd,
        accept,
        streamId,
        requestBody,
    }: {
        roomİd: string,
        accept?: string,
        /**
         * (Required) Stream id to add to the conference room
         */
        streamId?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/broadcasts/conference-rooms/{room_id}/add',
            path: {
                'room_id': roomİd,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'streamId': streamId,
            },
            body: requestBody,
        });
    }
}
