/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsConferenceRoomsRoomİdDeleteService {
    /**
     * Deletes the specified stream correlated with streamId in the room. Use DELETE /conference-rooms/{room_id}/{streamId}
     * @returns any OK
     * @throws ApiError
     */
    public static putV2BroadcastsConferenceRoomsDelete({
        roomİd,
        accept,
        streamId,
        requestBody,
    }: {
        roomİd: string,
        accept?: string,
        /**
         * (Required) Stream id to delete from the conference room
         */
        streamId?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/broadcasts/conference-rooms/{room_id}/delete',
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
