/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsStreamİdWebrtcClientStatsOffsetSizeService {
    /**
     * Get WebRTC Client Statistics such as : Audio bitrate, Video bitrate, Target bitrate, Video Sent Period etc.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsWebrtcClientStats({
        streamİd,
        offset,
        size,
        accept,
    }: {
        streamİd: string,
        offset: string,
        size: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/{stream_id}/webrtc-client-stats/{offset}/{size}',
            path: {
                'stream_id': streamİd,
                'offset': offset,
                'size': size,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
