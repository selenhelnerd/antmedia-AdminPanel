/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsConferenceRoomsRoomİdStreamIdService {
    /**
     * Adds the specified stream with streamId to the room.
     * @returns any OK
     * @throws ApiError
     */
    public static putV2BroadcastsConferenceRooms({
        roomİd,
        streamId,
        accept,
        requestBody,
    }: {
        roomİd: string,
        streamId: string,
        accept?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/broadcasts/conference-rooms/{room_id}/{streamId}',
            path: {
                'room_id': roomİd,
                'streamId': streamId,
            },
            headers: {
                'Accept': accept,
            },
            body: requestBody,
        });
    }
    /**
     * Deletes the specified stream correlated with streamId in the room. Use
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2BroadcastsConferenceRooms({
        roomİd,
        streamId,
        accept,
    }: {
        roomİd: string,
        streamId: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/broadcasts/conference-rooms/{room_id}/{streamId}',
            path: {
                'room_id': roomİd,
                'streamId': streamId,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
