/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsConferenceRoomsRoomİdService {
    /**
     * Edits previously saved conference room
     * @returns any OK
     * @throws ApiError
     */
    public static putV2BroadcastsConferenceRooms({
        roomİd,
        contentType,
        accept,
        requestBody,
    }: {
        roomİd: string,
        contentType?: string,
        accept?: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/broadcasts/conference-rooms/{room_id}',
            path: {
                'room_id': roomİd,
            },
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Deletes a conference room. The room id is key so if this is called with the same room id then new room is overwritten to old one
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2BroadcastsConferenceRooms({
        roomİd,
        accept,
    }: {
        roomİd: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/broadcasts/conference-rooms/{room_id}',
            path: {
                'room_id': roomİd,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
